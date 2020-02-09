import React from "react";
import * as Tone from "tone";

import Button from "./Button/Button";
import Divider from "./Divider/Divider";
import Textarea from "./Input/Textearea";

type ScaleState = {
  value: string,
};

class Scale extends React.Component<{}, ScaleState> {
  synth?: Tone.Synth<Tone.SynthOptions>;

  state: ScaleState = {
    value: 'C4 D4 E4 G4 A4',
  };

  componentDidMount() {
    this.synth = new Tone.Synth().toMaster();
  }

  onPlay = () => {
    const { value } = this.state;

    if (this.synth?.context.isOffline) {
      Tone.start();
    }

    const pattern = new Tone.Pattern((time, note) => {
      this.synth?.triggerAttackRelease(note, 0.5 / 4);
    }, value.split(/\s+/));

    pattern.start(0);

    Tone.Transport.start();
  }

  onStop = () => {
    Tone.Transport.stop();
  }

  onChange = (ev: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { value } = ev.currentTarget;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <Textarea
          value={value}
          onChange={this.onChange}
        />
        <Divider />
        <Button type="button" onClick={this.onPlay}>
          Play
        </Button>
        <Button type="button" onClick={this.onStop}>
          Stop
        </Button>
      </div>
    );
  }
}


export default Scale;