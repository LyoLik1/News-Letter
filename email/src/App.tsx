import { render } from "@react-email/components";
import { Email } from "./email/Email";

function App() {
  const renderedHtml = render(<Email />, {
    pretty: true,
  });
  console.log(renderedHtml);

  return (
    <div>
      <Email />
    </div>
  );
}

export default App;
