import MainLeftBar from '../features/main/MainLeftBar';
import MainRightBar from '../features/main/MainRightBar';

export default function MainPage() {
  return (
    <div className="h-fit flex justify-center flex-wrap gap-6 p-10">
      <MainLeftBar />

      <MainRightBar />
    </div>
  );
}
