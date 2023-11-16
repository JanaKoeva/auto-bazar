import styles from '../components/BottomMenu.module.css'

export default function BottomMenu() {
	return (
		<div className="bottommenu">
			<div className="bottomlogo">
				<span className="dotlogo">&bull;</span>
				<img className={styles.dotlogoBorder} src="image/logo2.png" alt="logo1" />
				<span className="dotlogo">&bull;</span>
			</div>
			<ul className="nav nav-tabs bottomlinks">
				<li role="presentation" ><a href="#/" role="button">ABOUT US</a></li>
				<li role="presentation"><a href="#/">CATEGORIES</a></li>
				<li role="presentation"><a href="#/">PREORDERS</a></li>
				<li role="presentation"><a href="#/">CONTACT US</a></li>
				<li role="presentation"><a href="#/">RECEIVE OUR NEWSLETTER</a></li>
			</ul>
			<blockquote className={styles.blockquote}><p>&quot;Racing is a great mania to which one must sacrifice everything,
				without reticence, without hesitation.&quot;</p>
				<p>Enzo Ferrari</p>
			</blockquote>

			<div className="bottomsocial" id="inline">


				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-google-plus"></i></a>
				<a href="#"><i className="fa fa-pinterest"></i></a>
			</div>

		</div>
	)
}