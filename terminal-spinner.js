const ora = () => {
    const stream = process.stderr;
    const spinner = {
      interval: 80,
      frames: [
        "⠋",
        "⠙",
        "⠹",
        "⠸",
        "⠼",
        "⠴",
        "⠦",
        "⠧",
        "⠇",
        "⠏"
      ],
    }
    let curIndex = 0;
    setInterval(() => {
      const frame = spinner.frames[curIndex++ % spinner.frames.length];
      stream.cursorTo(0);
      stream.write(frame + ' loading');
    }, spinner.interval);
}

ora();
