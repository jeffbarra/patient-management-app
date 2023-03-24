import { useEffect, useState } from "react";
import "./Announcements.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const response = await fetch("http://localhost:5001/api/announcements");
      const json = await response.json();

      if (response.ok) {
        setAnnouncements(json);
      }
    };

    fetchAnnouncements();
  }, []);
  return (
    <div className="news-widget-container">
      <div className="news-widget">
        <h1>Announcements</h1>
        <div className="news-widget-body">
          {announcements &&
            announcements.map((announcement) => (
              <>
                <h2>{announcement.date}</h2>
                <p key={announcement._id}>{announcement.announcement}</p>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
