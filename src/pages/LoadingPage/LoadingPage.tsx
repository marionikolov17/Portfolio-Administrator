import styles from "./LoadingPage.module.css";

export default function LoadingPage() {
    return (
        <>
            <div className="w-full h-screen absolute top-0 z-50 flex justify-center items-center overflow-hidden bg-primary-950">
                <div className={styles.loader}></div>
            </div>
        </>
    )
}