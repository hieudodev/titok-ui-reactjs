import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0e9a975102d170fdfcde6fdd8e06a30c~c5_300x300.webp?x-expires=1696402800&x-signature=cW84ar7mlcOQRt0Jik9ZGlsv8ME%3D"
                alt="img"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4 className={cx('heading')}>Le Bong TV </h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('description')}>Retyping. S</span>
            </div>
        </div>
    );
}

export default AccountItem;
