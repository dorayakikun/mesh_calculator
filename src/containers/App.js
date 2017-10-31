// @flow

import React, { Component } from 'react'
import { Accordion, Grid, Image, Menu, Radio, Sidebar } from 'semantic-ui-react'

import MarkerInputContainer from './MarkerInputContainer'
import MeshInputContainer from './MeshInputContainer'
import MeshDetailsContainer from './MeshDetailsContainer'
import MapContainer from './MapContainer'
import TileToggleContainer from './TileToggleContainer'

export default class AccordionExampleMenu extends Component {
  state = { activeIndex: 2 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div style={{ height: '100%' }}>
        <Sidebar.Pushable>
          <Sidebar visible width="wide">
            <Accordion
              as={Menu}
              fluid
              inverted
              vertical
              style={{ height: '100%' }}
            >
              <Menu.Item name="waffleMap">
                <Image src="./images/logo.png" size="mini" spaced />
                <strong>Waffle Map</strong>
              </Menu.Item>

              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                Tile Grid
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Menu.Item name="tileToggle">
                  <TileToggleContainer />
                </Menu.Item>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                Marker
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <Menu.Item name="markerInput">
                  <MarkerInputContainer />
                </Menu.Item>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                Mesh Code
              </Accordion.Title>

              <Accordion.Content active={activeIndex === 2}>
                <Menu.Item name="meshInput">
                  <MeshInputContainer />
                </Menu.Item>
                <Menu.Item name="meshDetails">
                  <MeshDetailsContainer />
                </Menu.Item>
              </Accordion.Content>
            </Accordion>
          </Sidebar>
          <Sidebar.Pusher>
            <MapContainer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
