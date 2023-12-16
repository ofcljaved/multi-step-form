import { Button } from '..';

const StepBar = () => {
  return (
    <div className=' row-span-full rounded-lg bg-stepbar-mobile sm:bg-stepbar-desktop'>
      <ul>
        <li>
          <Button variant='Ghost'>step 1</Button>
        </li>
        <li>
          <Button variant='Ghost'>step 2</Button>
        </li>
        <li>
          <Button variant='Ghost'>step 3</Button>
        </li>
        <li>
          <Button variant='Ghost'>step 4</Button>
        </li>
      </ul>
    </div>
  );
};

export default StepBar;
