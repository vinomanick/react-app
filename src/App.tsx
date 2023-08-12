import { ReactComponent as ReactIcon } from 'src/assets/react.svg';

export const App = () => {
  return (
    <div className="font-semibold text-lg text-green-500">
      <ReactIcon width="24px" height="24px" className="text-blue-500" />
      Rendered from react app
    </div>
  );
};
