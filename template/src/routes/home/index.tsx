import { h, Component } from 'preact';
import { RouterProps } from 'preact-router';
import style from './style.css';

export interface HomeProperties extends RouterProps { }

export interface HomeState { }

export default class Home extends Component<HomeProperties, HomeState> {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
