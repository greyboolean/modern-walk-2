import Loading from "../Loading/Loading";
import styles from "./Section.module.css";

function Section({ heading, children, loading }) {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>{heading}</h1>
			{loading ? <Loading /> : children}
		</div>
	);
}

export default Section;
