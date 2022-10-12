<template>
  <div class="user-container">
    <el-avatar :size="100" :src="userInfo.avatarUrl" />
    <div class="user-container__infos">
      <span>Nome: {{ userInfo.name }}</span>
      <span>Email: {{ userInfo.email }}</span>
      <div class="user-container__links">
        <el-link
          v-if="userInfo.linkedinUrl.length > 0"
          :href="userInfo.linkedinUrl"
          target="_blank"
        >
          Linkedin
          <el-icon>
            <Link :size="20" />
          </el-icon>
        </el-link>
        <el-link v-if="userInfo.gitUrl.length > 0" :href="userInfo.gitUrl" target="_blank">
          GitHub
          <el-icon>
            <Link :size="20" />
          </el-icon>
        </el-link>
        <el-link v-if="userInfo.lattesUrl.length > 0" :href="userInfo.lattesUrl" target="_blank">
          Lattes
          <el-icon>
            <Link :size="20" />
          </el-icon>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {
          name: "",
          gitUser: "",
          gitUrl: "",
          avatarUrl: "",
          linkedinUrl: "",
          lattesUrl: "",
          email: "",
        };
      },
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
