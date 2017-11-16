import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * AreaSpline Chart Component
 * @augments Chart
 */
class AreaSplineChart extends Chart {}

AreaSplineChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof AreaSplineChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
			hide: Config.bool(),
			id: Config.required().string(),
			type: Config.oneOf(types.area),
		})
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof AreaSplineChart
	 * @type {?string|undefined}
	 * @default area-spline
	 */
	type: Config.oneOf(types.area).value('area-spline'),
};

export {AreaSplineChart};
export default AreaSplineChart;
