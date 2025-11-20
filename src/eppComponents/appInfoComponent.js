export default function AppInfoComponent(){
  return (
  <div className="col-12 d-flex justify-content-center">
    <div className="row w-100 align-items-center justify-content-center text-center" style={{ padding: '20px 100px 20px 100px' }}>

      {/* Left Column */}
      <div className="col-6 d-flex justify-content-center">
        <img src="/images/app-info.png" alt="app info" className="img-fluid" />
      </div>

      {/* Right Column */}
      <div className="col-6 d-flex flex-column align-items-center">
        <img src="/images/logo.png" alt="logo" className="img-fluid mb-2" />
        <h4 className="mb-0">Mobile Applications</h4>
        <h4 className="mb-3">Grand Launching</h4>

        <div>
          <img src="/images/app-01.png" className="img-fluid me-2" alt="app1" />
          <img src="/images/app-02.png" className="img-fluid" alt="app2" />
        </div>
      </div>

    </div>
  </div>
);
}