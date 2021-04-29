// App.js
import React from "react";

function App() {
  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a
              href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/index3.html"
              className="nav-link"
            >
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search"></i>
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2"></i> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2"></i> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a
          href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/index3.html"
          className="brand-link"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/index.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/index2.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/index3.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="../widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right"></i>
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/fixed-sidebar-custom.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-topnav.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-footer.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie"></i>
                  <p>
                    Charts
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/uplot.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>uPlot</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tree"></i>
                  <p>
                    UI Elements
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Modals & Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/navbar.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Navbar & Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/ribbons.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Ribbons</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit"></i>
                  <p>
                    Forms
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-table"></i>
                  <p>
                    Tables
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../tables/simple.html" className="nav-link active">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="../calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt"></i>
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../kanban.html" className="nav-link">
                  <i className="nav-icon fas fa-columns"></i>
                  <p>Kanban Board</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope"></i>
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book"></i>
                  <p>
                    Pages
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/e-commerce.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-add.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/project-edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/project-detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contact-us.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Extras
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Login & Register v1
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="../examples/login.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/register.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/recover-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Recover Password v1</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Login & Register v2
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="../examples/login-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/register-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/forgot-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../examples/recover-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/lockscreen.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/starter.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-search"></i>
                  <p>
                    Search
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a
                  href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/iframe.html"
                  className="nav-link"
                >
                  <i className="nav-icon fas fa-ellipsis-h"></i>
                  <p>Tabbed IFrame Plugin</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle"></i>
                  <p>
                    Level 1<i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Level 2<i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger"></i>
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info"></i>
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Simple Tables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Simple Tables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Bordered Table</h3>
                  </div>

                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}>#</th>
                          <th>Task</th>
                          <th>Progress</th>
                          <th style={{ width: "40px" }}>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar progress-bar-danger"
                                style={{ width: "55%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-danger">55%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "70%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-warning">70%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-primary">30%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-success">90%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          &laquo;
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          &raquo;
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Condensed Full Width Table</h3>
                  </div>

                  <div className="card-body p-0">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}>#</th>
                          <th>Task</th>
                          <th>Progress</th>
                          <th style={{ width: "40px" }}>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar progress-bar-danger"
                                style={{ width: "55%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-danger">55%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "70%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-warning">70%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-primary">30%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-success">90%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Simple Full Width Table</h3>

                    <div className="card-tools">
                      <ul className="pagination pagination-sm float-right">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            &laquo;
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            &raquo;
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="card-body p-0">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}>#</th>
                          <th>Task</th>
                          <th>Progress</th>
                          <th style={{ width: "40px" }}>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar progress-bar-danger"
                                style={{ width: "55%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-danger">55%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "70%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-warning">70%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-primary">30%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-success">90%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Striped Full Width Table</h3>
                  </div>

                  <div className="card-body p-0">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}>#</th>
                          <th>Task</th>
                          <th>Progress</th>
                          <th style={{ width: "40px" }}>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar progress-bar-danger"
                                style={{ width: "55%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-danger">55%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "70%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-warning">70%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-primary">30%</span>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-success">90%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Responsive Hover Table</h3>

                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: "150px" }}
                      >
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />

                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>183</td>
                          <td>John Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-success">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-warning">Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>657</td>
                          <td>Bob Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-primary">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>Mike Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-danger">Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Fixed Header Table</h3>

                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: "150px" }}
                      >
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />

                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: "300px" }}
                  >
                    <table className="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>183</td>
                          <td>John Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-success">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-warning">Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>657</td>
                          <td>Bob Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-primary">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>Mike Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-danger">Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>134</td>
                          <td>Jim Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-success">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>494</td>
                          <td>Victoria Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-warning">Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>832</td>
                          <td>Michael Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-primary">Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>982</td>
                          <td>Rocky Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-danger">Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Expandable Table</h3>
                  </div>

                  <div className="card-body">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          data-widget="expandable-table"
                          aria-expanded="false"
                        >
                          <td>183</td>
                          <td>John Doe</td>
                          <td>11-7-2014</td>
                          <td>Approved</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr data-widget="expandable-table" aria-expanded="true">
                          <td>219</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2014</td>
                          <td>Pending</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr data-widget="expandable-table" aria-expanded="true">
                          <td>657</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2014</td>
                          <td>Approved</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr
                          data-widget="expandable-table"
                          aria-expanded="false"
                        >
                          <td>175</td>
                          <td>Mike Doe</td>
                          <td>11-7-2014</td>
                          <td>Denied</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr
                          data-widget="expandable-table"
                          aria-expanded="false"
                        >
                          <td>134</td>
                          <td>Jim Doe</td>
                          <td>11-7-2014</td>
                          <td>Approved</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr
                          data-widget="expandable-table"
                          aria-expanded="false"
                        >
                          <td>494</td>
                          <td>Victoria Doe</td>
                          <td>11-7-2014</td>
                          <td>Pending</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr
                          data-widget="expandable-table"
                          aria-expanded="false"
                        >
                          <td>832</td>
                          <td>Michael Doe</td>
                          <td>11-7-2014</td>
                          <td>Approved</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                        <tr
                          data-widget="expandable-table"
                          aria-expanded="false"
                        >
                          <td>982</td>
                          <td>Rocky Doe</td>
                          <td>11-7-2014</td>
                          <td>Denied</td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td colspan="5">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Expandable Table Tree</h3>
                  </div>

                  <div className="card-body p-0">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <td className="border-0">183</td>
                        </tr>
                        <tr data-widget="expandable-table" aria-expanded="true">
                          <td>
                            <i className="expandable-table-caret fas fa-caret-right fa-fw"></i>
                            219
                          </td>
                        </tr>
                        <tr className="expandable-body">
                          <td>
                            <div className="p-0">
                              <table className="table table-hover">
                                <tbody>
                                  <tr
                                    data-widget="expandable-table"
                                    aria-expanded="false"
                                  >
                                    <td>
                                      <i className="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                      219-1
                                    </td>
                                  </tr>
                                  <tr className="expandable-body">
                                    <td>
                                      <div className="p-0">
                                        <table className="table table-hover">
                                          <tbody>
                                            <tr>
                                              <td>219-1-1</td>
                                            </tr>
                                            <tr>
                                              <td>219-1-2</td>
                                            </tr>
                                            <tr>
                                              <td>219-1-3</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-widget="expandable-table"
                                    aria-expanded="false"
                                  >
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-primary p-0"
                                      >
                                        <i className="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                      </button>
                                      219-2
                                    </td>
                                  </tr>
                                  <tr className="expandable-body">
                                    <td>
                                      <div className="p-0">
                                        <table className="table table-hover">
                                          <tbody>
                                            <tr>
                                              <td>219-2-1</td>
                                            </tr>
                                            <tr>
                                              <td>219-2-2</td>
                                            </tr>
                                            <tr>
                                              <td>219-2-3</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>219-3</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>657</td>
                        </tr>
                        <tr>
                          <td>175</td>
                        </tr>
                        <tr>
                          <td>134</td>
                        </tr>
                        <tr>
                          <td>494</td>
                        </tr>
                        <tr>
                          <td>832</td>
                        </tr>
                        <tr>
                          <td>982</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.1.0
        </div>
        <strong>
          Copyright &copy; 2014-2021{" "}
          <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>

      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default App;
