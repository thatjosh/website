const DarkModeOverlay = () => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "white",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default DarkModeOverlay;
