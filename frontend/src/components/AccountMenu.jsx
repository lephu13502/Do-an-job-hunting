import {useState} from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo1-modified.png';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
export default function AccountMenu() {
    const auth = getAuth()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })
    
    const { name, email } = formData
    
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Cài đặt tài khoản">
          <Button
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="outlined"
          >
            <Avatar sx={{ width: 32, height: 32 }} src={logo}/>
            {name}
          </Button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
            <Link to="/profile">
                Hồ sơ của tôi
            </Link>
        </MenuItem>
        <MenuItem>
            Tài khoản của tôi
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={onLogout}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Đăng xuất
            
        </MenuItem>
      </Menu>
    </>
  );
}