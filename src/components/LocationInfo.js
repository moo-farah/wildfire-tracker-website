const LocationInfo = ({info}) => {
  return (
    <div className="location-info">
      <h2>Event Location Information</h2>
        <ul>
            <li>ID: {info.id}</li>
            <li>Title: {info.title}</li>
        </ul>
    </div>
   );
}

export default LocationInfo
