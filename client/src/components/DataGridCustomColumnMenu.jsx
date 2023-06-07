import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;

  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn} colDef=''/>
      <GridColumnMenuHideItem />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;

// GridColumnMenuFilterItem;
// GridColumnMenuHideItem;