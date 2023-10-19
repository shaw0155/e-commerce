import AccountCard from "../components/account/AccountCard";
import PropTypes from "prop-types";
import PersonalInfo from "../components/account/PersonalInfo";
import { useState } from "react";
import WishlistPanel from "../components/account/WishlistPanel";
import AccountOrders from "../components/account/AccountOrders";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("index" + index, "value" + value);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const tabPanels = [<PersonalInfo />, <WishlistPanel />, <AccountOrders />];

export default function Account() {
  const [value, setValue] = useState(0);

  const onTabChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="account">
      <h2> Account</h2>
      <div className="account-body">
        <AccountCard onTabChange={onTabChange} />
        {tabPanels.map((panel) => (
          <TabPanel value={value} index={tabPanels.indexOf(panel)}>
            {panel}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
