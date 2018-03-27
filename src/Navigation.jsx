import React, { Component } from 'react';
import { Navbar, NavItem, NavLink, NavbarBrand, NavbarNav } from 'mdbreact';
import recipes from './assets/recipes.svg';
import ingredients from './assets/ingredients.svg';
import './Navigation.css';

const NavigationItem = (props) => (
  <NavItem>
    <NavLink className="nav-link" to={props.to} exact={true}>
      <div className="navigation-item">
        <img src={props.image} className="app-logo" alt="logo" />
        <span>{props.title}</span>
      </div>
    </NavLink>
  </NavItem>
)

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.navItems = [
      {
        to: "/",
        title: "Recipes",
        image: recipes

      },
      {
        to: "/ingredients",
        title: "Ingredients",
        image: ingredients
      }
    ];
  }

  render() {
    return (
      <Navbar color="elegant-color-dark" dark expand="xs" scrolling>
        <NavbarBrand href="/">
          <h1>Delish</h1>
        </NavbarBrand>

        <NavbarNav className="ml-auto">
          {this.navItems.map((item, key) => (
            <NavigationItem
              key={key}
              to={item.to}
              title={item.title}
              image={item.image}
            />
          ))}
        </NavbarNav>

      </Navbar>
    )
  }
}

export default Navigation;