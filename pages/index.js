import moment from 'moment';

const today = moment();
const formattedDate = today.format('YYYY MM DD hh:mm:ss');

export default () => (
    <div>
        Main page {formattedDate}
    </div>
);