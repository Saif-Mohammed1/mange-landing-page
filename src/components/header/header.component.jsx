import Illustration from "../../assets/images/illustration-intro.svg";
import {
  Head,
  HeaderContainer,
  Text,
  Header,
  Button,
} from "./header.component.styles";
const PageHeader = () => {
  return (
    <HeaderContainer>
      <Header>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button> Get Started</Button>
      </Header>
      <div>
        <img src={Illustration} alt="Illustration" />
        {/* <Illustration /> */}
      </div>
      <Header>
        <h1> What’s different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </Header>

      <Header>
        <div className="track">
          <Head>
            <p>01</p>
            <h1> Track company-wide progress</h1>
          </Head>
          <Text>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </Text>
        </div>
        <div className="track">
          <Head>
            <p>02</p>
            <h1>Advanced built-in reports</h1>
          </Head>
          <Text>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </Text>
        </div>
        <div className="track">
          <Head>
            <p>03</p>
            <h1> Everything you need in one place</h1>
          </Head>
          <Text>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </Text>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default PageHeader;
