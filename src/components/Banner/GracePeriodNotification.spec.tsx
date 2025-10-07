import { GracePeriodNotification } from "./GracePeriodNotification";
import renderer from 'react-test-renderer';

describe('GracePeriodNotification', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <GracePeriodNotification 
        date='December 31, 2024' 
        paymentsFaqUrl='https://help.openstax.org/s/article/Assignable-Payments-FAQS' 
        handleCheckout={() => {}} 
        onDismiss={() => {}} 
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});