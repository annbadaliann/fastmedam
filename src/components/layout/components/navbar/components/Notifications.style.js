import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export const Title = styled.h4`
  color: #5d5959;
  font-weight: bold;
`;

export const NotificationTitle = styled(Typography)`
  color: #000000;
  font-size: 14px;
`;

export const NotificationDate = styled(Typography)`
  font-size: 11px;
  line-height: 12px;
  color: #a2a2a2;
  text-align: right;
`;

export const NotificationDescription = styled(Typography)`
  line-height: 17px;
  font-size: 13px;
  color: #5d5959;
`;

export const DropwdownWrapper = styled.div`
  position: absolute;
  right: 7px;
  top: 28px;
`;

export const Dropdown = styled.div`
  background-color: #fff;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 120px;
  box-shadow: 0px 0px 10px #cac8c8;
  border-radius: 5px;
`;

export const SettingsIcon = styled(MoreVertIcon)`
  position: absolute;
  height: 20px;
  color: #6f6f6f;
`;

export const BadgeIcon = styled(Badge)`
  background-color: #f50071;
  color: white;
  font-size: 9px;
  border-radius: 4px;
  min-width: 14px;
  height: 15px;
  box-shadow: 0px 3px 6px #00000029;
  padding: 0;
  top: 2px;
  right: -2px;
`;

export  const NotificationItem = styled(ListItem)`
padding: 8px 17px 5px;
border-bottom: 1px solid #f5f5f5;
`;

export const NotificationIcon = styled.p``