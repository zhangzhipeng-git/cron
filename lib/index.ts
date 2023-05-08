import './index.scss';

class Cron {
  /** 默认值 */
  defaultValue = '';
  /** 类型列表 */
  typeList = [
    { value: 'everySeconds', label: '每秒' },
    { value: 'everyHours', label: '每小时' },
    { value: 'everyday', label: '每天' },
    { value: 'week', label: '每周' },
    { value: 'month', label: '每月' },
    { value: 'year', label: '每年' },
    { value: 'custom', label: '自定义' },
  ];
  /** 周列表 */
  weekList = [
    { label: '周一', value: '2' },
    { label: '周二', value: '3' },
    { label: '周三', value: '4' },
    { label: '周四', value: '5' },
    { label: '周五', value: '6' },
    { label: '周六', value: '7' },
    { label: '周日', value: '1' },
  ];

  container!: Element | null;

  constructor(
    el: string | Element,
    { defaultValue }: { defaultValue: string }
  ) {
    this.container = typeof el === 'string' ? document.querySelector(el) : el;
    this.defaultValue = defaultValue;
    this.create();
  }

  create() {
    if (!this.container) return;
  }
}
