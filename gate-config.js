/**
 * Gate 视频资源配置
 * 
 * 后续更换视频只需修改以下 URL 即可。
 * 建议将视频上传至：
 *   - Supabase Storage
 *   - 腾讯云 COS
 *   - Cloudflare R2
 * 不建议长期存放在项目仓库中（会导致仓库体积快速增大）。
 *
 * 视频格式要求：MP4 (H.264)
 *   - PC 视频建议 ≤ 10MB
 *   - Mobile 视频建议 ≤ 5MB
 */

/* ---- 视频源 ---- */
const GATE_VIDEO_PC     = "https://wwqqvfnuxpddhgwuwiut.supabase.co/storage/v1/object/public/video/PC.mp4";
const GATE_VIDEO_MOBILE = "https://wwqqvfnuxpddhgwuwiut.supabase.co/storage/v1/object/public/video/MOBILE.mp4";

/* ---- 静态回退图（视频加载失败 / 未加载时显示）---- */
const GATE_VIDEO_POSTER = "assets/gate-bg.jpg";

/* ---- 设备断点：< 768px 视为移动端 ---- */
const GATE_MOBILE_BREAKPOINT = 768;
