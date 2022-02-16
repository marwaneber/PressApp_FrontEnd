/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable */

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import HomeMember from "./pages/HomeMember";
import Theme from "./pages/Theme";
import HomeColab from "./pages/HomeColab";
import HomeWriter from "./pages/colab/HomeWriter";
import HomeCorrector from "./pages/colab/HomeCorrector";
import HomeTranslate from "./pages/colab/HomeTranslate";
import NotFound from "./pages/NotFound";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignUpColab from "./pages/SignUpColab";
import SignUpMember from "./pages/SignUpMember";


import SignIn from "./pages/SignIn";
import SignInColab from "./pages/SignInColab";
import SignInMember from "./pages/SignInMember";


import Main from "./components/layout/Main";
import Article from "./pages/Article";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import HomeAdmin from "./pages/HomeAdmin";
import ListRedacteur from "./pages/ListRedacteur";
import ListCorrector from "./pages/ListCorrector";
import ListTraducteur from "./pages/ListTraducteur";

function App() {
  return (
    <div className="App">
      <Main>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/admin/redacteur" component={ListRedacteur} />
          <Route exact path="/admin/corrector" component={ListCorrector} />
          <Route exact path="/admin/traducteur" component={ListTraducteur} />
         

          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup-member" component={SignUpMember} />
          <Route exact path="/signup-colab" component={SignUpColab} />

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signin-member" component={SignInMember} />
          <Route exact path="/signin-colab" component={SignInColab} />

          <Route exact path="/member" component={HomeMember} />
          <Route exact path="/member/theme/:id" component={Theme} />
          <Route exact path="/colab" component={HomeColab} />
          <Route exact path="/writer" component={HomeWriter} />
          <Route exact path="/translate" component={HomeTranslate} />
          <Route exact path="/write" component={HomeWriter} />
          <Route exact path="/member/article" component={Article} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Main>
    </div>
  );
}

export default App;
