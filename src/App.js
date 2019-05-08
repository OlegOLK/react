import React from 'react';
import logo from './logo.svg';
import './App.css';

import { UserSession, AppConfig } from 'blockstack';
import { configure, getConfig, User, UserGroup } from 'radiks';
import { BasicRule } from './models/basicRule';
import { DateTimeCondition } from './models/basicCondition';


const userSession = new UserSession({
  appConfig: new AppConfig(['store_write', 'publish_data'])
})

configure({
  apiServer: 'http://localhost:1260',
  userSession
});


async function handleSignIn() {
  const { userSession } = getConfig();
  if (userSession.isSignInPending()) {
    await userSession.handlePendingSignIn();
    await User.createWithCurrentUser();
  }
}
export default class App extends React.Component {

  signIn() {
    userSession.redirectToSignIn();
  }

  createRule() {
    let rule = new BasicRule({
      type: "baseRule",
      title: "olk first rule",
      active: true
    });

    rule.save().then(x => console.log('x', x));
  }


  createAction() {
    let rule = new BasicRule({
      type: "baseRule",
      title: "olk first rule",
      active: true
    });

    rule.save().then(x => console.log('x', x));
  }

  createCondition() {
    let condition = new DateTimeCondition({
      triggerTime: Date.now(),
      ruleId: "d4fde9da8b0c-4d8b-b2e3-87d33dd173da",
      active: true
    });
    condition.save().then(x => console.log('x', x));
  }

  createUserGroup() {
    const group = new UserGroup({ name: '11011' });
    group.create().then(x => console.log('user group', x));
  }

  async getMyGroups() {
    const groups = await UserGroup.myGroups();
    console.log(groups);
  }

  async inviteToGroup() {
    const group = await UserGroup.findById("5db432a9b4f5-41d8-b7f5-4d329e1940a5");
    console.log(group);
    const invitation = await group.makeGroupMembership("the11011.id.blockstack");
    console.log(invitation);
  }

  async inviteUserToGroup() {
    const group = new UserGroup({ name: 'testingyoyoyoyo' });
    group.create().then(grp => {
      console.log(grp);
      group.makeGroupMembership("the11011.id.blockstack").then(invitation => {
        console.log(invitation);

      });

    })

  

    // UserGroup.findById("4bfba3459876-4654-abe8-e1f9bef93bce").then(grp=>{
    //   console.log(grp);
    //   grp.makeGroupMembership("godskills.id.blockstack").then(x=>{
    //     console.log('xx', x);
    //   });
    // });
    // const usernameToInvite = 'godskills.id.blockstack';
    // const invitation = await group.makeGroupMembership(usernameToInvite);
    // console.log(invitation._id); // the ID used to later activate an invitation

  }
  getInfo(){

    console.log(User.currentUser());
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.signIn()}>SignIn</button>
        <button onClick={() => handleSignIn()}>Handle</button>

        <button onClick={() => this.createRule()}>createModels</button>

        <button onClick={() => this.createCondition()}>createCondition</button>

        <button onClick={() => this.createUserGroup()}>createUserGroup</button>

        <button onClick={() => this.inviteUserToGroup()}>inviteUserToGroup</button>

        <button onClick={() => this.getMyGroups()}>getMyGroups</button>

        <button onClick={() => this.getInfo()}>getInfo</button>

        
      </div>
    )
  }
}
