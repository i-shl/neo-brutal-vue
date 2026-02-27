<template>
  <div class="neo-overview">
    <!-- Base -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">基础组件 Base</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Button</span>
          <NeoButton size="sm">按钮</NeoButton>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">ButtonGroup</span>
          <NeoButtonGroup>
            <NeoButton size="sm">A</NeoButton>
            <NeoButton size="sm">B</NeoButton>
            <NeoButton size="sm">C</NeoButton>
          </NeoButtonGroup>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Link</span>
          <NeoLink href="#">链接</NeoLink>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Space</span>
          <NeoSpace :size="8">
            <NeoButton size="sm">1</NeoButton>
            <NeoButton size="sm">2</NeoButton>
          </NeoSpace>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Divider</span>
          <NeoDivider />
        </div>
      </div>
    </section>

    <!-- Form -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">表单组件 Form</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Input</span>
          <NeoInput placeholder="输入" size="sm" style="width: 120px" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">InputGroup</span>
          <NeoInputGroup>
            <NeoInput placeholder="前缀" size="sm" style="width: 80px" />
            <NeoInput placeholder="后缀" size="sm" style="width: 80px" />
          </NeoInputGroup>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">InputNumber</span>
          <NeoInputNumber v-model="num" :min="0" :max="10" size="sm" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Select</span>
          <NeoSelect v-model="sel" :options="opts" size="sm" style="width: 100px" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Radio</span>
          <NeoRadio v-model="radio" value="a" label="A" size="sm" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Checkbox</span>
          <NeoCheckbox v-model="checked" size="sm">勾选</NeoCheckbox>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Switch</span>
          <NeoSwitch v-model="sw" size="sm" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Slider</span>
          <NeoSlider v-model="slider" :max="100" size="sm" style="width: 100px" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Rate</span>
          <NeoRate v-model="rate" />
        </div>
      </div>
    </section>

    <!-- Layout -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">布局组件 Layout</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Card</span>
          <NeoCard title="卡片" style="width: 140px">内容</NeoCard>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Row / Col</span>
          <NeoRow :columns="3" :gap="8">
            <NeoCol :span="1"><div class="neo-overview__box">1</div></NeoCol>
            <NeoCol :span="1"><div class="neo-overview__box">2</div></NeoCol>
            <NeoCol :span="1"><div class="neo-overview__box">3</div></NeoCol>
          </NeoRow>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">ScrollArea</span>
          <NeoScrollArea height="60px" style="width: 120px">
            <div>行1</div>
            <div>行2</div>
            <div>行3</div>
          </NeoScrollArea>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Collapse</span>
          <NeoCollapse v-model="collapseActive" style="width: 160px">
            <NeoCollapseItem title="折叠" name="a">内容</NeoCollapseItem>
          </NeoCollapse>
        </div>
      </div>
    </section>

    <!-- Data Display -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">数据展示 Data Display</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Tag</span>
          <NeoTag>标签</NeoTag>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Badge</span>
          <NeoBadge :count="5">
            <NeoButton size="sm">消息</NeoButton>
          </NeoBadge>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Progress</span>
          <NeoProgress :percent="60" style="width: 100px" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Avatar</span>
          <NeoAvatar size="sm">U</NeoAvatar>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Statistic</span>
          <NeoStatistic title="数值" :value="1234" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Empty</span>
          <NeoEmpty description="暂无数据" style="padding: 1rem" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Skeleton</span>
          <NeoSkeleton :rows="2" style="width: 120px" />
        </div>
      </div>
    </section>

    <!-- Feedback -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">反馈组件 Feedback</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Alert</span>
          <NeoAlert type="info" title="提示">信息内容</NeoAlert>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Dialog</span>
          <NeoButton size="sm" @click="dialogVisible = true">打开</NeoButton>
          <NeoDialog v-model="dialogVisible" title="对话框">内容</NeoDialog>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Result</span>
          <NeoResult status="success" title="成功" sub-title="操作完成" />
        </div>
      </div>
    </section>

    <!-- Overlay -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">浮层组件 Overlay</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Tooltip</span>
          <NeoTooltip content="提示文字">
            <NeoButton size="sm">悬停</NeoButton>
          </NeoTooltip>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Popover</span>
          <NeoPopover>
            <template #content>气泡内容</template>
            <NeoButton size="sm">点击</NeoButton>
          </NeoPopover>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Drawer</span>
          <NeoButton size="sm" @click="drawerVisible = true">抽屉</NeoButton>
          <NeoDrawer v-model="drawerVisible" title="抽屉">内容</NeoDrawer>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">导航组件 Navigation</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Tabs</span>
          <NeoTabs v-model="tab" style="width: 180px">
            <NeoTabPane name="a" label="Tab 1">内容1</NeoTabPane>
            <NeoTabPane name="b" label="Tab 2">内容2</NeoTabPane>
          </NeoTabs>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Breadcrumb</span>
          <NeoBreadcrumb>
            <NeoBreadcrumbItem to="#">首页</NeoBreadcrumbItem>
            <NeoBreadcrumbItem>当前</NeoBreadcrumbItem>
          </NeoBreadcrumb>
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Pagination</span>
          <NeoPagination v-model:current="page" :total="50" :page-size="10" />
        </div>
        <div class="neo-overview__item">
          <span class="neo-overview__label">Steps</span>
          <NeoSteps :current="1">
            <NeoStep title="步骤1" />
            <NeoStep title="步骤2" />
            <NeoStep title="步骤3" />
          </NeoSteps>
        </div>
      </div>
    </section>

    <!-- Other -->
    <section class="neo-overview__section">
      <h3 class="neo-overview__title">其他 Other</h3>
      <div class="neo-overview__grid">
        <div class="neo-overview__item">
          <span class="neo-overview__label">Backtop</span>
          <NeoBacktop />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  NeoButton,
  NeoButtonGroup,
  NeoLink,
  NeoSpace,
  NeoDivider,
  NeoInput,
  NeoInputGroup,
  NeoInputNumber,
  NeoSelect,
  NeoRadio,
  NeoCheckbox,
  NeoSwitch,
  NeoSlider,
  NeoRate,
  NeoCard,
  NeoRow,
  NeoCol,
  NeoScrollArea,
  NeoCollapse,
  NeoCollapseItem,
  NeoTag,
  NeoBadge,
  NeoProgress,
  NeoAvatar,
  NeoStatistic,
  NeoEmpty,
  NeoSkeleton,
  NeoAlert,
  NeoDialog,
  NeoResult,
  NeoTooltip,
  NeoPopover,
  NeoDrawer,
  NeoTabs,
  NeoTabPane,
  NeoBreadcrumb,
  NeoPagination,
  NeoSteps,
  NeoStep,
  NeoBacktop,
  NeoBreadcrumbItem,
} from 'neo-brutal-vue'

const num = ref(5)
const collapseActive = ref(['a'])
const sel = ref('')
const radio = ref('a')
const checked = ref(false)
const sw = ref(true)
const slider = ref(50)
const rate = ref(3)
const dialogVisible = ref(false)
const drawerVisible = ref(false)
const tab = ref('a')
const page = ref(1)

const opts = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
]
</script>

<style scoped>
.neo-overview {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.neo-overview__section {
  border: 3px solid var(--neo-black);
  padding: 1.5rem;
  background: var(--neo-white);
  box-shadow: 6px 6px 0 var(--neo-black);
}

.neo-overview__title {
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.neo-overview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.neo-overview__item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

.neo-overview__label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--neo-gray-100);
  text-transform: uppercase;
}

.neo-overview__box {
  padding: 0.25rem 0.5rem;
  background: var(--neo-gray-50);
  border: 2px solid var(--neo-black);
  font-size: 0.875rem;
}
</style>
