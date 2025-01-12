import SideNavLayout from './SideNavLayout'
import CategorySection  from '@/components/navbar/CategorySection';
import TrendingSection from '@/components/navbar/TrendingSection';
import HelpSetting from '@/components/navbar/HelpSettingSection';
import SalesSection from '@/components/navbar/SalesSection';
import ProductSection from '@/components/navbar/ProductSection';

const MainNavigation = () => {
  return (
    <SideNavLayout>
      <TrendingSection />
      <SalesSection />
      <ProductSection />
      <CategorySection />
      <HelpSetting />
    </SideNavLayout>
  );
};

export default MainNavigation;