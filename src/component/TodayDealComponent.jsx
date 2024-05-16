// src/components/DealsComponent.jsx
import React, { useState, useEffect } from "react";

const TodayDealComponent = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      const seconds = d.getMinutes() * 60 + d.getSeconds();
      const fiveMin = 60 * 18;
      const timeLeft = fiveMin - (seconds % fiveMin);
      const result = `${parseInt(timeLeft / 60)}:${
        timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60
      }`;
      setTimeLeft(result);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-dark text-white justify-content-between align-items-center d-flex align-items-start flex-column  px-3 py-2">
        <div className="card-seal-time text-center d-flex flex-column align-items-center">
          <p className="">Today's Deals</p>
          <div className="d-flex align-items-center justify-content-center my-2">
            <img
              className="_29lYyb"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMyAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGVsbGlwc2UgaWQ9IjAiIGN4PSI2LjQyOSIgY3k9IjcuODI2IiByeD0iNi40MjkiIHJ5PSI2LjQwMyIvPjxtYXNrIGlkPSIxIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyLjg1NyIgaGVpZ2h0PSIxMi44MDciIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iIzAiLz48L21hc2s+PC9kZWZzPjxnIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzViNWI1YiI+PHBhdGggZD0ibTUgMGgyLjg1N3YyLjEzNGgtMi44NTd6Ii8+PHBhdGggZD0ibTEwIDMuMTQxbDEuMDEtMS4wMSAxLjAxIDEuMDEtMS4wMSAxLjAxeiIvPjwvZz48dXNlIHN0cm9rZT0iIzVjNWM1YyIgbWFzaz0idXJsKCMxKSIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjMCIvPjxnIGZpbGw9IiNkMDAxMWIiPjxyZWN0IHg9IjYuMDcxIiB5PSI0LjYyNSIgd2lkdGg9Ii43MTQiIGhlaWdodD0iMy41NTciIHJ4PSIuMzU3IiByeT0iMSIvPjxwYXRoIGQ9Im0xMC4zMyA4LjU1OGMuMTkyLjA1MS4zMDQuMjUyLjI1NC40MzYtLjA1MS4xOS0uMjUuMzAyLS40MzkuMjUxbC0zLjcyNy0uOTk1Yy0uMTkyLS4wNTEtLjMwNC0uMjUyLS4yNTQtLjQzNi4wNTEtLjE5LjI1LS4zMDIuNDM5LS4yNTFsMy43MjcuOTk1Ii8+PC9nPjwvZz48L3N2Zz4="
              alt=""
            />
            <div className="text-white">{timeLeft}</div>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default TodayDealComponent;
