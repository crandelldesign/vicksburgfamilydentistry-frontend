<template>
  <div id="page-style-guide" class="page-content">
    <div class="row">
      <div class="col-sm-6">
          <h1>Color Palette</h1>
          <div class="row">
            <div class="col-md-4">
                  <div class="color-swatch swatch1">
                      Emporor<br>
                      #555555
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch2">
                      Deep Cerulean<br>
                      #006DB0
                  </div>
              </div>
              <!--<div class="col-md-4">
                  <div class="color-swatch swatch3">
                      Swamp<br>
                      #000E16
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch4">
                      Azure Radiance<br>
                      #009EFF
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch5">
                      Silver Sand<br>
                      #BBBDBF
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch6">
                      Cerulean<br>
                      #0AB1C7
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch7">
                      Old Lace<br>
                      #FBF5E9
                  </div>
              </div>-->
              <div class="col-md-4">
                  <div class="color-swatch swatch3">
                      Success<br>
                      #28A745
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch4">
                      Info<br>
                      #6DAEDB
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch5">
                      Warning<br>
                      #FFC914
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch6">
                      Danger<br>
                      #ED2D38
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch7">
                      Light<br>
                      #E7EBED
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="color-swatch swatch8">
                      Dark<br>
                      #020508
                  </div>
              </div>
          </div>
          <hr>

          <h1>Buttons</h1>

          <div class="btn-container">
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-tertiary">Tertiary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
              <button type="button" class="btn btn-link">Link</button>
          </div>
          <div class="btn-container bg-dark">
              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-tertiary">Tertiary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
          </div>

      </div>
      <div class="col-sm-6">
          <h1>Typography</h1>

          <h1>Heading 1</h1>
          <p class="details">Font: Cormorant Garamond Bold / Deep Cerulean #006DB0</p>

          <hr>

          <h2>Heading 2</h2>
          <p class="details">Font: Cormorant Garamond Bold / Cerulean #0AB1C7</p>

          <hr>

          <h3>Heading 3</h3>
          <p class="details">Font: Roboto Bold / Swamp #000E16</p>

          <hr>

          <p>Body Text</p>
          <p>Lorem ipsum dolor sit amet, quis quam, fusce duis. Montes vestibulum esse, tristique dui lorem. Wisi cubilia. Nonummy justo, eros aliquet elit, nulla sollicitudin ut. Iaculis sit lacus, nisi orci nunc, pede convallis vestibulum.</p>
          <p>Sed tellus. Posuere est quis, lacus sit nec. Ultricies vehicula arcu, nunc nonummy id. Vivamus odio neque, faucibus duis. Non diam amet, elit nec semper.</p>

          <p><a href="#">This is a link</a> - <a href="#" class="hover">This is a hover link</a></p>

          <p class="details">Font: Roboto 400 / Swamp #000E16</p>
      </div>
  </div>
  <div class="row">
      <div class="col-md-6">
          <h1>Form Elements</h1>
          <form>
              <div class="grid-2">
                  <div class="form-group">
                      <label>First name</label>
                      <input type="text" class="form-control" placeholder="First name" value="Mark" required>
                  </div>
                  <div class="form-group">
                      <label>Last name</label>
                      <input type="text" class="form-control is-valid" placeholder="Last name" value="Otto" required>
                      <div class="valid-feedback">
                          Looks good!
                      </div>
                  </div>
                  <div class="form-group">
                      <label>City</label>
                      <input type="text" class="form-control is-invalid" placeholder="City" required>
                      <div class="invalid-feedback">
                          Please provide a valid city.
                      </div>
                  </div>
                  <div class="form-group">
                      <label>State</label>
                      <input type="text" class="form-control is-invalid" placeholder="State" required>
                      <div class="invalid-feedback">
                          Please provide a valid state.
                      </div>
                  </div>
                  <div class="form-group">
                      <label>Zip</label>
                      <input type="text" class="form-control is-invalid" placeholder="Zip" required>
                      <div class="invalid-feedback">
                          Please provide a valid zip.
                      </div>
                  </div>
              </div>
              <div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
          </form>
      </div>
      <div class="col-md-6">
          <div class="alert alert-success" role="alert">
          A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-danger" role="alert">
          A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-warning" role="alert">
          A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-info" role="alert">
          A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-light" role="alert">
          A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-dark" role="alert">
          A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
      </div>
    </div>
  </div>
</template>
