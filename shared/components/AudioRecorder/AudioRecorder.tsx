import { createRef, useState } from "react";
import { Box, Button, Divider, makeStyles, Checkbox, FormControlLabel } from "@material-ui/core";

import AudioService from "../../services/AudioService";

type State = Partial<{
  recorder: MediaRecorder;
  isPlaying: boolean;
  isRecording: boolean;
  shouldLoopAudio: boolean;
}>;

const useStyles = makeStyles({
  divider: {
    margin: '0 1rem',
  },
  buttonsContainer: {
    '& > *:not(:first-child)': {
      marginLeft: '1rem',
    }
  }
});

export type AudioRecorderProps = {
  loop?: boolean;
};

const AudioRecorder: React.FC<AudioRecorderProps> = (props) => {
  const {
    loop = false
  } = props;

  const classes = useStyles();
  const audioRef = createRef<HTMLAudioElement>();

  const [state, setState] = useState<State>({
    shouldLoopAudio: loop,
  });

  const [audioSrc, setAudioSrc] = useState<string>('');

  const {
    recorder,
    isRecording,
    shouldLoopAudio,
  } = state;

  function handleSetAudioSrc(ev: BlobEvent) {
    setAudioSrc(URL.createObjectURL(ev.data));
  }

  async function handleRecord() {
    const audio = audioRef.current;

    if (!audio || isRecording) {
      return;
    }

    const stream = await AudioService.getAudio();
    const recorder = await (
      import('audio-recorder-polyfill')
        .then(({ 'default': MediaRecorder }) => new MediaRecorder(stream))
    );

    // Set record to <audio> when recording will be finished
    recorder.addEventListener('dataavailable', handleSetAudioSrc);

    // Start recording
    recorder.start();

    setState({
      ...state,
      recorder,
      isRecording: true,
    });
  }

  async function handleStop() {
    if (recorder  && isRecording) {
      recorder.stop();

      recorder.removeEventListener('dataavailable', handleSetAudioSrc);

      setState({
        ...state,
        recorder: undefined,
        isRecording: false,
      });
    }
  }

  function handleToggleLoopAudio() {
    setState({
      ...state,
      shouldLoopAudio: !shouldLoopAudio,
    });
  }

  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <audio
        ref={audioRef}
        src={audioSrc}
        loop={shouldLoopAudio}
        controls={true}
        autoPlay={Boolean(audioSrc)}
      />

      <Divider className={classes.divider} />

      <Button
        color={isRecording
            ? 'primary'
            : 'secondary'
        }
        onClick={isRecording
          ? handleStop
          : handleRecord
        }
      >
        {isRecording
          ? 'Stop'
          : 'Record'
        }
      </Button>

      <Divider className={classes.divider} />

      <FormControlLabel
        label="loop"
        control={
          <Checkbox
            name="loop-audio"
            color="primary"
            checked={shouldLoopAudio}
            onChange={handleToggleLoopAudio}
          />
        }
      />
    </Box>
  );
}

export default AudioRecorder;