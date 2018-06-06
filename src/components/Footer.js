// @flow
import React from "react"
import { Provider, Box } from "rebass"
import FooterContainer from "../styles/footer/FooterContainer"
import FooterItemsHeader from "../styles/footer/FooterItemsHeader"
import FooterLink from "../styles/footer/FooterLink"
import FooterItemsContainer from "../styles/footer/FooterItemsContainer"
import FooterItem from "../styles/footer/FooterItem"

type ItemType = {
  /** url link */
  link: string,
  /** description of the link that will be displayed */
  description: string,
}

type FooterItemType = {
  /** The header or title of every footer section */
  header: ItemType,
  /** List of entry under the header */
  items: Array<ItemType>,
}

type FooterProps = {
  /** List of footer items, inside a nested list */
  items: Array<Array<FooterItemType>>,
}

const footerItems = (items: Array<ItemType>) =>
  items.map((c, i) => (
    <FooterItem key={i} m={0} p={1}>
      <FooterLink href={c.link} color="#d8d8d8" fontSize={11}>
        {c.description}
      </FooterLink>
    </FooterItem>
  ))

const footerSubSections = (items: Array<FooterItemType>) =>
  items.map((c, i) => (
    <Box key={i} p={10}>
      <FooterItemsHeader p={0}>
        <FooterLink href={c.header.link} color="#19d6a0" fontSize={14}>
          {c.header.description}
        </FooterLink>
      </FooterItemsHeader>
      <FooterItemsContainer m={0} p={0}>
        {footerItems(c.items)}
      </FooterItemsContainer>
    </Box>
  ))

const footerSections = (items: Array<Array<FooterItemType>>) => {
  const fraction = 1 / (items.length + 2)
  return items.map((c, i) => (
    <Box width={fraction} key={i}>
      {footerSubSections(c)}
    </Box>
  ))
}

const theme = {
  breakpoints: [40, 52, 64],
  font: "Roboto, sans-serif",
  background: "linear-gradient(#2c3e50, #3498db)",
}

/**
 * The `Footer` component that will be displayed
 * at the bottom of every react web application of [dictyBase](http://dictybase.org).
 */
let Footer = ({ items }: FooterProps) => (
  <Provider theme={theme}>
    <FooterContainer
      width={"100%"}
      justify="center"
      align={["left", "left", "left", "left"]}
      direction={["row", "row", "row", "row"]}>
      {footerSections(items)}
    </FooterContainer>
  </Provider>
)

export default Footer
