// Import React
import React from "react";
import ReactDOM from 'react-dom'
import GSAP from 'react-gsap-enhancer'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import {TransitionGroup, CSSTransitionGroup} from 'react-transition-group'
import {TimelineMax, TweenMax} from 'gsap'
import _ from 'lodash'

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import '../assets/styles.css'
import '../assets/loader.css'
import '../assets/animate.css'
import '../assets/transit.css'

// Load examples
import cssExample from "raw-loader!../assets/demoSources/code.example";
import cssTransitExample from "raw-loader!../assets/demoSources/css-transition.example";
import motionExample from "raw-loader!../assets/demoSources/motion.example";
import gsapExample from "raw-loader!../assets/demoSources/using-transition-group.example";
import stateExample from "raw-loader!../assets/demoSources/state-change.example";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Preloaded images
const images = {
  meetup: require("../assets/meetup.png"),
  profile_pic: require("../assets/profile_mini.jpg"),
  buttons: require("../assets/buttons.gif"),
  fb_transfer: require("../assets/fb-transfer.gif"),
  rocket: require("../assets/rocket.gif"),
  problem: require("../assets/problem.gif"),
  airbnb: require("../assets/airbnb.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#5e4fa2",
  tertiary: "#66bc45",
  quartenary: "#2ac4f4"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="none">
        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.meetup.replace("/", "")} style={{width:1200}}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How can React become sexy?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React Budapest Reboot
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Image src={images.profile_pic.replace("/", "")} className="rounded"/>
          <Heading size={6} lineHeight={1} fit caps lineHeight={1} textColor="primary">
            Gyulavári Ádám
          </Heading>
          <Text size={6} lineHeight={1} textColor="secondary" bold>
            #partner at Lab.Coop, #mentor at Green Fox, #developer at Chain.Reaction
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>Why animate though?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="quartenary" caps>Detecting motion</Heading>
          <Image src={images.buttons.replace("/", "")} />
          <Text textSize="10px" textColor="tertiary">Image source: Google Material Design</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="quartenary" caps>Transfer between states</Heading>
          <Image src={images.fb_transfer.replace("/", "")} />
          <Text textSize="10px" textColor="tertiary">Image source: Yummygum Journal Medium</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="quartenary" caps>So why again?</Heading>
          <Appear>
            <Text size={6} textColor="primary">Meaningful animations</Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>Understand</ListItem>
            </Appear>
            <Appear>
              <ListItem>Learn</ListItem>
            </Appear>
            <Appear>
              <ListItem>Enjoy</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">I just want to reload all the time...</Heading>
          <Image src={images.rocket.replace("/", "")} />
          <Text textSize="10px" textColor="tertiary">Image source: Dribble</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Recent brittish studies</Heading>
            <List>
              <Appear>
                <ListItem>Humans over-estimate passive waits by 36% - Eli Fitch and Richard Larson, MIT</ListItem>
              </Appear>
              <Appear>
                <ListItem>Viget study: wait twice as long for custom loader</ListItem>
              </Appear>
              <Appear>
                <ListItem>Successful businesses avoid waiting time (or hide)</ListItem>
              </Appear>
            </List>
            <Table>
              <TableRow>
                <TableItem>
                  <div className="overlay-loader">
                  	<div className="loader">
                  		<div></div>
                  		<div></div>
                  		<div></div>
                  		<div></div>
                  		<div></div>
                  		<div></div>
                  		<div></div>
                  	</div>
                  </div>
                </TableItem>
                <TableItem>
                  <span className="cssload-loader"><span className="cssload-loader-inner"></span></span>
                </TableItem>
                <TableItem>
                  <div className="cssload-thecube">
                  	<div className="cssload-cube cssload-c1"></div>
                  	<div className="cssload-cube cssload-c2"></div>
                  	<div className="cssload-cube cssload-c4"></div>
                  	<div className="cssload-cube cssload-c3"></div>
                  </div>
                </TableItem>
              </TableRow>
            </Table>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="tertiary" caps>So what now in React?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="quartenary" caps>jQuery?</Heading>
          <List>
            <Appear>
              <ListItem>Probably everybody started with this</ListItem>
            </Appear>
            <Appear>
              <ListItem>Modifying the DOM directly</ListItem>
            </Appear>
            <Appear>
              <ListItem>Performs not so good</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="quartenary" caps>CSS animations?</Heading>
          <List>
            <Appear>
              <ListItem>{"Now we're talking"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Works really well with React"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Performance is also good"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Even animation \"frameworks\""}</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} lineHeight={1} caps textColor="secondary">
            CSS animation
          </Heading>
          <br />
          <ComponentPlayground code={cssExample} scope={{ Motion, spring }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} lineHeight={1} caps textColor="secondary">
            Transition Group styles
          </Heading>
          <br />
          <CodePane source={require("raw-loader!../assets/demoSources/transit.example")} lang="css"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} lineHeight={1} caps textColor="secondary">
            Transition Group
          </Heading>
          <br />
          <ComponentPlayground code={cssTransitExample} scope={{ CSSTransitionGroup }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
          <Image src={images.problem.replace("/", "")} />
          <Text textSize="10px" textColor="tertiary">Image source: Giphy</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary" caps>CSS animations!</Heading>
          <List>
            <Appear>
              <ListItem>{"Not that intuitive"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Repeat"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Hard to customize the predefined stuff"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Painful sequencing"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Oh, and that."}</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} lineHeight={1} caps textColor="quartenary">
            {"So what's next?"}
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Appear>
            <div>
              <Heading size={4} textColor="quartenary" caps>React specific</Heading>
              <List>
                  <ListItem>{"react-animations"}</ListItem>
                  <ListItem>{"react-motion"}</ListItem>
                  <ListItem>{"react-move"}</ListItem>
              </List>
            </div>
          </Appear>
          <Appear>
            <div>
              <Heading size={4} textColor="quartenary" caps>React compatible</Heading>
              <List>
                  <ListItem>{"velocityjs"}</ListItem>
                  <ListItem>{"GSAP (GreenSock)"}</ListItem>
              </List>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary" caps>React animations</Heading>
          <List>
            <Appear>
              <ListItem>{"Animate.css in React"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"CSS in JS"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Aphrodite or Radium or JSS"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Build together"}</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="quartenary" caps>React motion</Heading>
          <List>
            <Appear>
              <ListItem>{"Without the concept of time"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Pure physics"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Don't have to worry about curving"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Complex and complicated"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Works in React Native and react router"}</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} lineHeight={1} caps textColor="secondary">
            React Motion snippet
          </Heading>
          <br />
          <ComponentPlayground code={motionExample} scope={{ Motion, spring }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="quartenary" caps>React move</Heading>
          <List>
            <Appear>
              <ListItem>{"Time and ease based"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Powerful"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Animated components"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"12kb"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Works in React Native"}</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary" caps>GreenSock (GSAP)</Heading>
          <List>
            <Appear>
              <ListItem>{"Great performance"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Different implementations for custom needs"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Animate everything"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"HTML5"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Works in React Native"}</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} lineHeight={1} caps textColor="secondary">
            GSAP snippet
          </Heading>
          <br />
          <ComponentPlayground code={gsapExample} scope={{ GSAP, GS_GREEN: '#88ce02', TransitionGroup, ReactDOM, _, TimelineMax }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} lineHeight={1} caps textColor="secondary">
            State changing GSAP snippet
          </Heading>
          <br />
          <ComponentPlayground code={stateExample} scope={{ GSAP, GS_GREEN: '#88ce02', TransitionGroup, ReactDOM, _, TimelineMax, TweenMax }}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="quartenary" caps>Worth mentioning</Heading>
          <Image src={images.airbnb.replace("/", "")} />
          <Text textSize="10px" textColor="tertiary">Image source: Lottie</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Thank you!</Heading>
          <List>
            <ListItem textSize="24px">{"https://github.com/FormidableLabs/spectacle"}</ListItem>
            <ListItem textSize="24px">{"https://daneden.github.io/animate.css/"}</ListItem>
            <ListItem textSize="24px">{"https://github.com/FormidableLabs/react-animations"}</ListItem>
            <ListItem textSize="24px">{"https://github.com/chenglou/react-motion"}</ListItem>
            <ListItem textSize="24px">{"https://github.com/tannerlinsley/react-move"}</ListItem>
            <ListItem textSize="24px">{"http://velocityjs.org/"}</ListItem>
            <ListItem textSize="24px">{"https://greensock.com/gsap"}</ListItem>
            <ListItem textSize="24px">{"https://github.com/airbnb/lottie-react-native"}</ListItem>
          </List>
          <Heading size={6} textColor="quartenary">chainreaction.io</Heading>
        </Slide>
      </Deck>
    );
  }
}
