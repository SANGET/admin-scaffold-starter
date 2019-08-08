import React from 'react';

import { AdminWebScaffold, Link } from 'uke-admin-web-scaffold';

import './style.scss'

const VersionInfo = {
  numberVersion: 'v1.0.0'
};

const TestPage = (text = 'Test Page') => () => (
  <div className="p20">
    {text}
    <Link
      params={{
        ID: 'testID',
        data: '123'
      }}
      className="btn theme" to="TEST2">跳转到 TEST2</Link>
  </div>
);

const pageComponents = {
  TestPage: TestPage('TestPage'),
  TestPage2: TestPage('TestPage2'),
};

const menuStore = [
  {
    title: '测试页面',
    icon: 'table',
    code: 'TestPage'
  },
  {
    title: '一级菜单',
    child: [
      {
        title: '测试页面2',
        icon: 'table',
        code: 'TestPage2'
      },
      {
        title: '测试页面2',
        icon: 'table',
        code: 'TestPage3'
      },
    ]
  }
]


const userInfo = {
  username: 'uke-user'
}

const ScaffoldDemo = () => {
  return (
    <AdminWebScaffold
      menuStore={menuStore}
      username={userInfo.username}
      versionInfo={VersionInfo}
      userInfo={userInfo}
      pageComponents={pageComponents}/>
  );
}

export default ScaffoldDemo;
