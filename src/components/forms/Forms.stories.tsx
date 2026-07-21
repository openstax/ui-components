import React from 'react';
import styled from 'styled-components';
import {Controlled as Forms, Uncontrolled} from '.';
import { fetchSuccess, fetchError } from "@openstax/ts-utils/fetch";

export const BasicControlledForm = () => {
  const data = {
    name: 'Test McTesterson',
  }

  type Data = typeof data;
  const state = fetchSuccess<Data>(data);
  const [submitted, setSubmitted] = React.useState<Partial<Data>>({});

  return <Forms.Form state={state} onSubmit={(data: Partial<Data>) => setSubmitted(data)}>
    <Forms.TextInput name="name" label="Name" />
    <Forms.Buttons />
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
  </Forms.Form>
};

const FormRow = styled(Forms.FormSection)`
  display: flex;
  flex-direction: row;

  > *:not(:first-child) {
    margin-top: 0;
    margin-left: 5px;
  }
`;
export const FormRepeatableElements = () => {
  const data = {
    name: 'Test McTesterson',
    interests: [{interest: 'sleeping'}],
  }

  type Data = typeof data;
  const state = fetchSuccess<Data>(data);
  const [submitted, setSubmitted] = React.useState<Partial<Data>>({});
  const [sortable, setSortable] = React.useState<boolean>(false);

  return <Forms.Form state={state} onSubmit={(data: Partial<Data>) => setSubmitted(data)}>
    <Forms.TextInput name="name" label="Name" />
    <Uncontrolled.Checkbox name="sortable" label="Sortable" onChangeValue={checked => setSortable(!!checked)} />
    <Forms.List name="interests">
      <Forms.ListItems>
        <FormRow>
          {sortable ? <Forms.ListRecordSortableHandle style={{height: 'auto'}} /> : null}
          <Forms.TextInput name="interest" label="Interest" />
          <Forms.ListRecordRemoveButton>remove interest</Forms.ListRecordRemoveButton>
        </FormRow>
      </Forms.ListItems>
      <Forms.ListRecordAddButton>add interest</Forms.ListRecordAddButton>
    </Forms.List>
    <Forms.Buttons />
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
  </Forms.Form>
};

export const BasicDataReferences = () => {
  const data = {
    name: 'Test McTesterson',
  }

  type Data = typeof data;
  const state = fetchSuccess<Data>(data);

  return <Forms.Form state={state}>
    <Forms.TextInput name="name" label="Name" />
    <Forms.Buttons />
    <Forms.GetFormValue name="name">
      {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Forms.GetFormValue>
    <Forms.GetFormData>
      {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Forms.GetFormData>
  </Forms.Form>
};

export const DataReferencesInNamespaces = () => {
  const data = {
    name: 'Test McTesterson',
    interests: [{interest: 'sleeping'}],
    address: {line1: '1 main st'}
  }

  type Data = typeof data;
  const state = fetchSuccess<Data>(data);

  return <Forms.Form state={state}>
    <Forms.TextInput name="name" label="Name" />
    <p>in a loop or namespace <code>Forms.GetFormData</code> and <code>Forms.GetFormValue</code> will return only values within the namespace</p>
    <Forms.GetFormData>{formData => <>
      <Forms.NameSpace name="address">
        <Forms.TextInput name="line1" label="line1" />
        <Forms.GetFormData>
          {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Forms.GetFormData>

        <p>if you need the parent context data in a subcomponent, you can wrap the entire section</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </Forms.NameSpace>
      <Forms.List name="interests">
        <Forms.ListItems>
          <FormRow>
            <Forms.TextInput name="interest" label="Interest" />
            <Forms.ListRecordRemoveButton>remove interest</Forms.ListRecordRemoveButton>
          </FormRow>
            <Forms.GetFormData>
              {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
            </Forms.GetFormData>
        </Forms.ListItems>
        <Forms.ListRecordAddButton>add interest</Forms.ListRecordAddButton>
      </Forms.List>
      <Forms.Buttons />
      <Forms.GetFormValue name="name">
        {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Forms.GetFormValue>
    </>}</Forms.GetFormData>
  </Forms.Form>
};

export const UncontrolledForm = () => {
  const [submitted, setSubmitted] = React.useState<Record<string, any>>({});
  const state = fetchSuccess({});

  return <>
    <h2>Basic Uncontrolled Form</h2>
    <Uncontrolled.Form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      setSubmitted(data);
    }}>
      <Uncontrolled.FormSection>
        <Uncontrolled.TextInput label="Name" name="name" help="Enter your full name" />
        <Uncontrolled.TextInput label="Email" name="email" required help="We'll never share your email" />
      </Uncontrolled.FormSection>
      <Uncontrolled.Buttons state={state} />
    </Uncontrolled.Form>
    <pre>{JSON.stringify(submitted, null, 2)}</pre>
  </>;
};

export const UncontrolledFormWithError = () => {
  const errorState = fetchError('There was an error submitting the form');

  return <>
    <h2>Form with Error Message</h2>
    <Uncontrolled.Form>
      <Uncontrolled.Messages state={errorState} />
      <Uncontrolled.TextInput label="Name" name="name" />
      <Uncontrolled.Buttons state={errorState} onCancel={() => console.log('Cancelled')} />
    </Uncontrolled.Form>
  </>;
};

export const UncontrolledFormSections = () => {
  const state = fetchSuccess({});

  return <>
    <h2>Form with Multiple Sections</h2>
    <Uncontrolled.Form>
      <Uncontrolled.FormSection>
        <h3>Personal Information</h3>
        <Uncontrolled.TextInput label="First Name" name="firstName" />
        <Uncontrolled.TextInput label="Last Name" name="lastName" />
      </Uncontrolled.FormSection>
      <Uncontrolled.FormSection>
        <h3>Contact Information</h3>
        <Uncontrolled.TextInput label="Email" name="email" />
        <Uncontrolled.TextInput label="Phone" name="phone" />
      </Uncontrolled.FormSection>
      <Uncontrolled.Buttons state={state} />
    </Uncontrolled.Form>
  </>;
};
