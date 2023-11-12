import ReactSVG from 'react-inlinesvg';
import Searchform from "@components/Searchform";

import { TemplatePackStyle } from "@root/style";
import { DashboardItemsStyle } from "./style"

import templateImg1 from "@images/template/1.svg";
import downloadIcon from "@icon/download.svg";

export default function MyPurchase() {
	return (
		<TemplatePackStyle className="templatiq__content__dashboard">
			<div className="templatiq__content__top">
				<div className="templatiq__content_top__filter">
					<h3 className="templatiq__content__top__filter__title">
						My Purchase
					</h3>
				</div>
				<div className="templatiq__content__top__search">
					<Searchform />
				</div>
			</div>
			<DashboardItemsStyle className="templatiq__content__dashboard__downloads">
				<div className="templatiq__content__dashboard__header">
					<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
						<span className="templatiq__content__dashboard__item__header">
							Name
						</span>
					</div>
					<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
						<span className="templatiq__content__dashboard__item__header">
							Downloaded Type
						</span>
					</div>
					<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
						<span className="templatiq__content__dashboard__item__header">
							Downloaded Date
						</span>
					</div>
					<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--insert">
						<span className="templatiq__content__dashboard__item__header">
                            Insert
						</span>
					</div>
				</div>
				<div className="templatiq__content__dashboard__items">
					<div className="templatiq__content__dashboard__single">
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
							<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
							<span className="templatiq__content__dashboard__item__title">
								Directorist Plugin
							</span>
						</div>
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
							<span className="templatiq__content__dashboard__item__text">
								Template Pack
							</span>
						</div>
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
							<span className="templatiq__content__dashboard__item__text">
								14 May, 2023 7.23pm
							</span>
						</div>	
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
							<a href="#" className="templatiq__content__dashboard__item__btn templatiq-btn templatiq-btn-success">
								<ReactSVG src={ downloadIcon } width={14} height={14} />
								Insert
							</a>
						</div>	
					</div>
					<div className="templatiq__content__dashboard__single">
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
							<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
							<span className="templatiq__content__dashboard__item__title">
								Directorist Plugin
							</span>
						</div>
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
							<span className="templatiq__content__dashboard__item__text">
								Template Pack
							</span>
						</div>
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
							<span className="templatiq__content__dashboard__item__text">
								14 May, 2023 7.23pm
							</span>
						</div>	
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
							<a href="#" className="templatiq__content__dashboard__item__btn templatiq-btn templatiq-btn-success">
								<ReactSVG src={ downloadIcon } width={14} height={14} />
								Insert
							</a>
						</div>	
					</div>
					<div className="templatiq__content__dashboard__single">
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
							<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
							<span className="templatiq__content__dashboard__item__title">
								Directorist Plugin
							</span>
						</div>
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
							<span className="templatiq__content__dashboard__item__text">
								Template Pack
							</span>
						</div>
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
							<span className="templatiq__content__dashboard__item__text">
								14 May, 2023 7.23pm
							</span>
						</div>	
						<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
							<a href="#" className="templatiq__content__dashboard__item__btn templatiq-btn templatiq-btn-success">
								<ReactSVG src={ downloadIcon } width={14} height={14} />
								Insert
							</a>
						</div>	
					</div>
				</div>
			</DashboardItemsStyle>
		</TemplatePackStyle>
	);
}
