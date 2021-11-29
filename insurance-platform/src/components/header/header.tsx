import './header.scss';
import Actions from '../../pages/Action/Action';
import Submissions from '../../pages/Submissions/Submissions';
import Bind from '../../pages/Bind/Bind';
import { Btn } from '../../models/models';
import { Fragment, useState, useEffect, useContext } from 'react';
import CurrentDataStore from '../../stores/currentDataStore';
import { observer } from 'mobx-react';

interface Props {
  renderPage: (Btn) => void;
}

const Header = observer((props: Props) => {
  const currentDataStore = useContext(CurrentDataStore);

  return (
    <div className="wrapper">
      <button className="btn" onClick={() => props.renderPage(Btn.Submissions)}>
        Submissions
      </button>
      <button
        className="btn"
        onClick={() => {
          currentDataStore.clearCurrentSubmission();
          props.renderPage(Btn.Actions);
        }}
      >
        New
      </button>
    </div>
  );
});

export default Header;
