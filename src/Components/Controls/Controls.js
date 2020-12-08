import React, { forwardRef } from "react";
import './Controls.css'
import PropTypes from "prop-types";
import {Button, IconButton, Slider, Tooltip, Grid, Typography, Popover, withStyles} from "@material-ui/core";
import { Fullscreen, VolumeOff, VolumeDown, VolumeUp, Pause, PlayArrow, FastForward, FastRewind, Bookmark} from "@material-ui/icons";
import {useStyles} from '../../hooks/useStyles'

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(({
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp,
  onDuration,
  onRewind,
  onPlayPause,
  onFastForward,
  playing,
  played,
  elapsedTime,
  totalDuration,
  onMute,
  muted,
  onVolumeSeekDown,
  onChangeDispayFormat,
  playbackRate,
  onPlaybackRateChange,
  onToggleFullScreen,
  volume,
  onVolumeChange,
  onBookmark,
},ref ) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {setAnchorEl(event.currentTarget)};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div ref={ref} className="configHidden">
        <div className="buttonsActions">
          <IconButton onClick={onRewind} className={classes.controlIcons} aria-label="rewind">
            <FastRewind className={classes.controlIcons} fontSize="inherit" />
          </IconButton>
          <IconButton onClick={onPlayPause} className={classes.controlIcons} aria-label="play" >
            {playing ? <Pause fontSize="inherit" /> : <PlayArrow fontSize="inherit" />}
          </IconButton>
          <IconButton
            onClick={onFastForward}
            className={classes.controlIcons}
            aria-label="forward"
          >
            <FastForward fontSize="inherit" />
          </IconButton>
        </div>
        {/* bottom controls */}
        <div className="scrollbuttonsActions">
          <div className="barraHorizontalVideo">
            <PrettoSlider
              min={0}
              max={100}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              )}
              aria-label="custom thumb label"
              value={played * 100}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
              onDuration={onDuration}
            />
          </div>

          <div className="itensVideo">
            <div className="styleVolume">
              <IconButton onClick={onMute} className={`${classes.bottomIcons} ${classes.volumeButton}`}>
                {muted ? (
                  <VolumeOff fontSize="large" />
                ) : volume > 0.5 ? (
                  <VolumeUp fontSize="large" />
                ) : (
                  <VolumeDown fontSize="large" />
                )}
              </IconButton>

              <Slider
                min={0}
                max={100}
                value={muted ? 0 : volume * 100}
                onChange={onVolumeChange}
                aria-labelledby="input-slider"
                className={classes.volumeSlider}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onVolumeSeekDown}
              />

              <Button variant="text" onClick={onChangeDispayFormat}>
                <Typography
                  variant="body1"
                  style={{ color: "#fff", marginLeft: 16 }}
                >
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </div>

            <div>
              <Button onClick={handleClick} aria-describedby={id} className={classes.bottomIcons} variant="text">
                <Typography>{playbackRate}X</Typography>
              </Button>

              <Popover
                container={ref.current}
                open={open}
                id={id}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Grid container direction="column-reverse">
                  {[0.5, 1, 1.5, 2].map((rate) => (
                    <Button
                      key={rate}
                      //   onClick={() => setState({ ...state, playbackRate: rate })}
                      onClick={() => onPlaybackRateChange(rate)}
                      variant="text"
                    >
                      <Typography
                        color={rate === playbackRate ? "secondary" : "inherit"}
                      >
                        {rate}X
                      </Typography>
                    </Button>
                  ))}
                </Grid>
              </Popover>

              <IconButton onClick={onToggleFullScreen} className={classes.bottomIcons}>
                <Fullscreen fontSize="large" />
              </IconButton>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;
