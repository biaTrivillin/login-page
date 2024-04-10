import "../../../styles/glassmorphism.css"

function Login() {

	return (
			<section className="background-radial-gradient overflow-hidden">
				
				<div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
					<div className="row gx-lg-5 align-items-center mb-5">
						<div className="col-lg-6 mb-5 mb-lg-0">
							<h1 className="my-5 display-5 fw-bold ls-tight text-light">
							Nature's Finest,  <br />
							<span>Yours to Flourish</span>
							</h1>
							<p className="mb-5 fs-6 text-light fw-semibold">
							Welcome to GreenHaven, your trusted source for a lush variety of plants that bring life and serenity to your space. Explore our diverse selection of species, carefully cultivated to thrive in any environment. Start your green journey with us today!
							</p>
						</div>

						<div className="col-lg-6 mb-5 mb-lg-0 position-relative">
							{/* <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
							<div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}
							<div className="card bg-transparent border-0 card_container">
								<div className="card-body px-4 py-5 px-md-5">
									<form>
										<div data-mdb-input-init className="form-outline mb-4">
											<input type="email" id="form3Example3" className="form-control" />
											<label className="form-label text-light" htmlFor="form3Example3">Email address</label>
										</div>

										<div data-mdb-input-init className="form-outline mb-4">
											<input type="password" id="form3Example4" className="form-control" />
											<label className="form-label text-light" htmlFor="form3Example4">Password</label>
										</div>

										<div className="form-check d-flex justify-content-center mb-4">
											<input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
											<label className="form-check-label text-light" htmlFor="form2Example33">
											Lembre minha senha
											</label>
										</div>

										<button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
											Login
										</button>

										<div className="text-center">
											<p className="text-light">or sign up with:</p>
											<button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
											<i className="fab fa-facebook-f"></i>
											</button>

											<button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
											<i className="bi bi-google"></i>
											</button>

											<button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
											<i className="bi bi-twitter-x"></i>
											</button>

											<button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
											<i className="bi bi-github"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>
		);
}

export default Login;
