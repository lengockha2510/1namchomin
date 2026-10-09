
<template>
  <section id="timeline" class="timeline-section">
    <div class="container">
      <h2
        class="title"
        data-aos="fade-up"
      >
        Mốc thời gian
      </h2>

      <div class="timeline">
        <div
          v-for="(item, index) in timeline"
          :key="item.id"
          class="timeline-item"
          :class="{ reverse: index % 2 !== 0 }"
          data-aos="fade-up"
        >
          <div
            class="content"
            :class="{
              'last-memory': item.id === 13
            }"
          >
            <!-- Ảnh bình thường -->
            <img
              v-if="!item.uploadable"
              class="timeline-photo"
              :src="item.image"
              :alt="item.title"
              loading="lazy"
            >

            <!-- Ảnh kỷ niệm cuối cùng -->
            <MemoryImage
              v-else
              :storage-key="`timeline-image-${item.id}`"
            />

            <!-- Nội dung mốc thời gian -->
            <div class="text">
              <span class="date">
                {{ item.date }}
              </span>

              <h3>
                {{ item.title }}
              </h3>

              <p>
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Trái tim trên trục timeline -->
          <div class="dot">
            ❤️
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { timeline } from '~/data/timeline'
import MemoryImage from '~/components/MemoryImage.vue'
</script>

<style scoped>
/* =========================
   SECTION
========================= */

.timeline-section {
  background: #fff8fb;
  padding: 120px 0;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.title {
  margin: 0;
  color: #ff4d6d;
  font-size: 42px;
  font-weight: 800;
  text-align: center;
}

/* =========================
   TIMELINE
========================= */

.timeline {
  position: relative;
  margin-top: 80px;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  border-radius: 10px;
  background: #ffd0dc;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 90px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item.reverse {
  justify-content: flex-end;
}

/* =========================
   CARD
========================= */

.content {
  width: 45%;
  min-width: 0;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.content:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 55px rgba(255, 77, 109, 0.13);
}

/* =========================
   NORMAL PHOTOS
========================= */

.timeline-photo {
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
}

/* =========================
   LAST MEMORY - ID 13
========================= */

/* Khung ảnh cuối lớn hơn các ảnh khác */
.content.last-memory :deep(.memory-image) {
  width: 100%;
  height: 400px;
  min-height: 400px;
}

/* Ảnh đã upload */
.content.last-memory :deep(.memory-image .saved-image) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Khung upload khi chưa có ảnh */
.content.last-memory :deep(.memory-image .upload-placeholder) {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

/* =========================
   TEXT
========================= */

.text {
  padding: 25px;
}

.date {
  display: inline-block;
  margin-bottom: 12px;
  color: #ff4d6d;
  font-size: 15px;
  font-weight: 600;
}

.text h3 {
  margin: 0 0 15px;
  color: #333;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.text p {
  margin: 0;
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

/* =========================
   HEART DOT
========================= */

.dot {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff4d6d;
  color: white;
  font-size: 28px;
  box-shadow: 0 10px 30px rgba(255, 77, 109, 0.35);
  transform: translate(-50%, -50%);
}

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {
  .timeline-section {
    padding: 90px 0;
  }

  .title {
    font-size: 36px;
  }

  .timeline::before {
    left: 28px;
  }

  .timeline-item,
  .timeline-item.reverse {
    justify-content: flex-start;
    padding-left: 80px;
  }

  .content {
    width: 100%;
  }

  .dot {
    left: 28px;
  }

  .content.last-memory :deep(.memory-image) {
    height: 360px;
    min-height: 360px;
  }

  .content.last-memory :deep(.memory-image .upload-placeholder) {
    min-height: 360px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {
  .timeline-section {
    padding: 65px 0;
  }

  .container {
    padding: 0 15px;
  }

  .title {
    font-size: 30px;
  }

  .timeline {
    margin-top: 55px;
  }

  .timeline::before {
    left: 18px;
    width: 3px;
  }

  .timeline-item,
  .timeline-item.reverse {
    padding-left: 48px;
    margin-bottom: 45px;
  }

  .content {
    width: 100%;
    border-radius: 18px;
  }

  .timeline-photo {
    height: 230px;
  }

  /* Ảnh kỷ niệm một năm */
  .content.last-memory :deep(.memory-image) {
    height: 320px;
    min-height: 320px;
  }

  .content.last-memory :deep(.memory-image .upload-placeholder) {
    min-height: 320px;
  }

  .text {
    padding: 20px;
  }

  .date {
    font-size: 13px;
  }

  .text h3 {
    font-size: 22px;
  }

  .text p {
    font-size: 14px;
    line-height: 1.8;
  }

  .dot {
    left: 18px;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>