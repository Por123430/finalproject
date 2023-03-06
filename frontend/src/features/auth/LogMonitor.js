import React from "react";


const LogMonitor = () => {
  const content = (
    <section className="LogMonitor">
      <div className="LogMonitor-display">
        <div className="LogMonitor-display__item">
        <iframe src="http://127.0.0.1:1880/ui/#!/0?socketid=Df61a9GwoU9YfidMAAAJ" height="600" width="400"></iframe>
        </div>
        <div className="LogMonitor-display__item">
            b2
        </div>
        <div className="LogMonitor-display__item">
            b3
        </div>
      </div>
    </section>
  );
  return content;
};

export default LogMonitor;
