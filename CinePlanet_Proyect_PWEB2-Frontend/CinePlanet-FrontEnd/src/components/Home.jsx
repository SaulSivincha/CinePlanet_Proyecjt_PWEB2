function Home() {
  return (
    <div className="container mt-4">
      <h1 className="fw-bold text-secondary mb-4">Películas</h1>
      <div className="row g-0">
        
        <div className="col-md-6 p-0">
          <div className="position-relative">
            <img
              src="https://i.redd.it/por-fin-estamos-representados-en-cine-disney-v0-lgh36nn9o3tb1.jpg?width=736&format=pjpg&auto=webp&s=26e4932d0f87e4bc00a0de49a3419cef11ae7108"
              alt="Pe causa"
              className="img-fluid rounded w-100"
            />
          </div>
        </div>

      
        <div className="col-md-2 p-0 d-flex flex-column gap-3">
          <div className="position-relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3KjdiBU_200tWKuAe2XhalCey1Ql-HjoOnj4jez2dFR5BnexVKGJupMf7o-3Zrv0iqY&usqp=CAU"
              alt="Moana 2"
              className="img-fluid rounded w-100"
            />
            <span className="badge bg-danger position-absolute" style={{ top: "2%", left: "2%" }}>
              Estreno
            </span>
          </div>
          <div className="position-relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQq9nPeJOhWdxisbSUwr0K5oRBb7LlXclP-w&s"
              alt="Los increibles"
              className="img-fluid rounded w-100"
            />
            <span className="badge bg-danger position-absolute" style={{ top: "2%", left: "2%" }}>
              Estreno
            </span>
          </div>
        </div>

      
        <div className="col-md-4 p-0">
          <div className="position-relative mb-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/896fa73f5155d71480379a4cb183d575c99b62de56d2ae85c6adbeafc0a6a4bf._RI_V_TTW_.jpg"
              alt="Zootopia"
              className="img-fluid rounded w-100"
            />
          </div>

          <div className="d-flex gap-0">
            <div className="position-relative flex-fill">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/encanto_ka_las_pay1_92ad7410.jpeg?region=0%2C0%2C1080%2C1350"
                alt="Encanto"
                className="img-fluid rounded"
                style={{ height: "50%" }}
              />
            </div>

            <div
              className="bg-danger text-white rounded d-flex align-items-center justify-content-center flex-fill"
              style={{ height: "100%" }}
            >
              <span className="fw-bold">Ver más películas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
