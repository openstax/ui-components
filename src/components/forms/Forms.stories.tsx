import React from 'react';
import styled from 'styled-components';
import {Controlled as Forms, Uncontrolled} from '.';
import { fetchSuccess } from "@openstax/ts-utils/fetch.js";

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
