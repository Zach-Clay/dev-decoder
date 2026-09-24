import { Outlet } from 'react-router-dom';
import TabBar from '../components/TabBar';
import InstallHint from '../components/InstallHint';

/**
 * The tabbed shell. Studying deliberately renders outside it: a session should
 * take over the screen the way a full-screen sheet does on iOS.
 */
export default function AppShell() {
  return (
    <div className="screen">
      <div className="screen-scroll">
        <Outlet />
        <InstallHint />
        <div className="h-6" />
      </div>
      <TabBar />
    </div>
  );
}
