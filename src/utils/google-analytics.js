import ReactGA from 'react-ga4';

const initializeGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  // console.log('GA INITIALIZED', process.env.NEXT_PUBLIC_ANALYTICS_ID);
};

const trackGAEvent = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
