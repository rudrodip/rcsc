export default function FBpost({ url, width=500, height=600 }) {
    return (
        <iframe
            src={`https://www.facebook.com/plugins/post.php?href=${url}&show_text=true&width=500`}
            width={width}
            height={height}
            style={{
                border: "none",
                overflow: " hidden",
                background: "white",
                margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
    )
}