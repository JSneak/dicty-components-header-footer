import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import footerLinks from "./data/footer"

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  list: {
    padding: "0px",
  },
  listHeader: {
    color: "#004080",
    fontSize: "1.2em",
    textDecoration: "none",
    listStyle: "none",
    marginBottom: theme.spacing(1),
  },
  listItem: {
    margin: "0px",
    padding: "0px",
    listStyle: "none",
  },
  link: {
    color: "rgb(55, 65, 81)",
    fontSize: "0.8em",
    textDecoration: "none",
    "&:hover": {
      color: "#004080",
    },
  },
}))

type ItemType = {
  /** url link */
  link?: string
  /** description of the link that will be displayed */
  description?: string
}

type FooterItemType = {
  /** The header or title of every footer section */
  header: ItemType
  /** List of entry under the header */
  items: Array<ItemType>
}

const LightFooter = () => {
  const classes = useStyles()

  const footerItems = (items: Array<ItemType>) =>
    items.map((c, i) => (
      <Typography key={i}>
        <a href={c.link} className={classes.link}>
          {c.description}
        </a>
      </Typography>
    ))

  const footerSubSections = (items: Array<FooterItemType>) =>
    items.map((c, i) => (
      <ul key={i} className={classes.list}>
        <li className={classes.listHeader}>{c.header.description}</li>
        <li className={classes.listItem}>{footerItems(c.items)}</li>
      </ul>
    ))

  const footerSections = (items: Array<Array<FooterItemType>>) =>
    items.map((c, i) => (
      <Grid item key={i} className={classes.gridItem}>
        {footerSubSections(c)}
      </Grid>
    ))

  return (
    <React.Fragment>
      <Divider />
      <Grid container justify="center">
        {footerSections(footerLinks)}
      </Grid>
    </React.Fragment>
  )
}

export default LightFooter
