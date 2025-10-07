import { GracePeriodNotification } from "./GracePeriodNotification";

export const Default = () => 
  <GracePeriodNotification 
    date='December 31, 2024' 
    paymentsFaqUrl='https://help.openstax.org/s/article/Assignable-Payments-FAQS' 
    handleCheckout={() => alert('handle checkout')} 
    onDismiss={() => alert('dismiss')} 
  />;