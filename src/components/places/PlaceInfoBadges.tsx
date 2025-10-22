"use client";

import { Tag, Tooltip } from "antd";
import type { LucideIcon } from "lucide-react";
import {
  Baby,
  CarFront,
  Dog,
  Megaphone,
  ShoppingBag,
  Weight,
} from "lucide-react";
import styled from "styled-components";

import {
  DOG_ACCESS_LABELS,
  DOG_REQUIREMENT_LABELS,
  PARKING_LABELS,
  WEIGHT_LIMIT_LABELS,
  type DogAccessOption,
  type DogRequirement,
  type ParkingOption,
  type Place,
  type WeightLimitOption,
} from "@/lib/places";

type InfoKey = "parking" | "dog_access" | "weight_limit";

type InfoVisualColors = {
  badgeBg: string;
  badgeColor: string;
  cardBg: string;
  cardBorder: string;
  iconColor: string;
};

type InfoVisual = InfoVisualColors & {
  display: string;
  tooltip: string;
};

type InfoConfig = {
  label: string;
  icon: LucideIcon;
  options: Record<string, InfoVisual>;
  fallback: InfoVisual;
};

const palette: Record<string, InfoVisualColors> = {
  green: {
    badgeBg: "rgba(0, 194, 122, 0.16)",
    badgeColor: "#0f5132",
    cardBg: "#f2fbf7",
    cardBorder: "rgba(0, 194, 122, 0.26)",
    iconColor: "#00a86b",
  },
  amber: {
    badgeBg: "rgba(255, 193, 7, 0.18)",
    badgeColor: "#8a5300",
    cardBg: "#fff8e6",
    cardBorder: "rgba(255, 193, 7, 0.3)",
    iconColor: "#d97706",
  },
  red: {
    badgeBg: "rgba(244, 63, 94, 0.16)",
    badgeColor: "#9f1239",
    cardBg: "#fff1f4",
    cardBorder: "rgba(244, 63, 94, 0.28)",
    iconColor: "#dc2626",
  },
  teal: {
    badgeBg: "rgba(13, 148, 136, 0.18)",
    badgeColor: "#0f766e",
    cardBg: "#e6f9f7",
    cardBorder: "rgba(13, 148, 136, 0.28)",
    iconColor: "#0d9488",
  },
  blue: {
    badgeBg: "rgba(59, 130, 246, 0.18)",
    badgeColor: "#1d4ed8",
    cardBg: "#eef4ff",
    cardBorder: "rgba(59, 130, 246, 0.26)",
    iconColor: "#2563eb",
  },
  violet: {
    badgeBg: "rgba(167, 139, 250, 0.2)",
    badgeColor: "#5b21b6",
    cardBg: "#f4f1ff",
    cardBorder: "rgba(167, 139, 250, 0.28)",
    iconColor: "#7c3aed",
  },
  gray: {
    badgeBg: "#eef2f0",
    badgeColor: "#52625d",
    cardBg: "#f7f9f8",
    cardBorder: "rgba(120, 136, 132, 0.24)",
    iconColor: "#4a5c56",
  },
};

const INFO_CONFIG: Record<InfoKey, InfoConfig> = {
  parking: {
    label: "주차",
    icon: CarFront,
    options: {
      available: {
        ...palette.green,
        display: PARKING_LABELS.available,
        tooltip: "주차를 이용할 수 있어요.",
      },
      limited: {
        ...palette.amber,
        display: PARKING_LABELS.limited,
        tooltip: "주차 공간이 제한적이에요.",
      },
      none: {
        ...palette.red,
        display: PARKING_LABELS.none,
        tooltip: "주차장이 제공되지 않아요.",
      },
      unknown: {
        ...palette.gray,
        display: PARKING_LABELS.unknown,
        tooltip: "주차 정보를 확인해 주세요.",
      },
    },
    fallback: {
      ...palette.gray,
      display: "확인 필요",
      tooltip: "주차 정보를 확인해 주세요.",
    },
  },
  dog_access: {
    label: "반려견 출입",
    icon: Dog,
    options: {
      all_allowed: {
        ...palette.green,
        display: DOG_ACCESS_LABELS.all_allowed,
        tooltip: "실내·실외 모두 반려견과 함께할 수 있어요.",
      },
      indoor_only: {
        ...palette.teal,
        display: DOG_ACCESS_LABELS.indoor_only,
        tooltip: "실내 공간만 반려견과 이용할 수 있어요.",
      },
      outdoor_only: {
        ...palette.teal,
        display: DOG_ACCESS_LABELS.outdoor_only,
        tooltip: "실외 공간만 반려견과 이용할 수 있어요.",
      },
      partial: {
        ...palette.amber,
        display: DOG_ACCESS_LABELS.partial,
        tooltip: "일부 공간만 반려견 출입이 가능해요.",
      },
      unknown: {
        ...palette.gray,
        display: DOG_ACCESS_LABELS.unknown,
        tooltip: "출입 정보를 확인해 주세요.",
      },
    },
    fallback: {
      ...palette.gray,
      display: "확인 필요",
      tooltip: "출입 정보를 확인해 주세요.",
    },
  },
  weight_limit: {
    label: "체중 제한",
    icon: Weight,
    options: {
      no_limit: {
        ...palette.green,
        display: WEIGHT_LIMIT_LABELS.no_limit,
        tooltip: "체중 제한 없이 입장할 수 있어요.",
      },
      limited: {
        ...palette.amber,
        display: WEIGHT_LIMIT_LABELS.limited,
        tooltip: "체중 제한이 있어요. 사전 확인이 필요해요.",
      },
      unknown: {
        ...palette.gray,
        display: WEIGHT_LIMIT_LABELS.unknown,
        tooltip: "체중 제한 정보를 확인해 주세요.",
      },
    },
    fallback: {
      ...palette.gray,
      display: "확인 필요",
      tooltip: "체중 제한 정보를 확인해 주세요.",
    },
  },
};

const REQUIREMENT_CONFIG: Record<
  DogRequirement,
  { icon: LucideIcon; tooltip: string; palette: InfoVisualColors }
> = {
  none: {
    icon: Megaphone,
    tooltip: DOG_REQUIREMENT_LABELS.none,
    palette: palette.green,
  },
  carrier_required: {
    icon: ShoppingBag,
    tooltip: DOG_REQUIREMENT_LABELS.carrier_required,
    palette: palette.blue,
  },
  stroller_required: {
    icon: Baby,
    tooltip: DOG_REQUIREMENT_LABELS.stroller_required,
    palette: palette.amber,
  },
  cage_required: {
    icon: ShoppingBag,
    tooltip: DOG_REQUIREMENT_LABELS.cage_required,
    palette: palette.violet,
  },
  unknown: {
    icon: Dog,
    tooltip: DOG_REQUIREMENT_LABELS.unknown,
    palette: palette.gray,
  },
};

type InfoItem = {
  key: string;
  label: string;
  display: string;
  tooltip: string;
  Icon: LucideIcon;
  badgeBg: string;
  badgeColor: string;
  cardBg: string;
  cardBorder: string;
  iconColor: string;
};

function buildInfoItems(place: Place): InfoItem[] {
  const entries: Array<
    [InfoKey, ParkingOption | DogAccessOption | WeightLimitOption | null | undefined]
  > = [
    ["parking", place.parking],
    ["dog_access", place.dog_access],
    ["weight_limit", place.weight_limit],
  ];

  const baseItems = entries
    .map(([key, value]) => {
      const config = INFO_CONFIG[key];
      if (!config) {
        return null;
      }
      const lookup = value ? config.options[value] : undefined;
      const resolved =
        lookup ??
        (value
          ? {
              ...config.fallback,
              display: value,
              tooltip: `${config.label}: ${value}`,
            }
          : config.fallback);
      return {
        key: `base-${key}`,
        label: config.label,
        display: resolved.display,
        tooltip: resolved.tooltip,
        Icon: config.icon,
        badgeBg: resolved.badgeBg,
        badgeColor: resolved.badgeColor,
        cardBg: resolved.cardBg,
        cardBorder: resolved.cardBorder,
        iconColor: resolved.iconColor,
      } satisfies InfoItem;
    })
    .filter((item): item is InfoItem => Boolean(item));

  return [...baseItems, ...buildRequirementItems(place)];
}

function buildRequirementItems(place: Place): InfoItem[] {
  const requirement = place.dog_requirements;
  if (!requirement || requirement === "unknown") {
    return [];
  }

  const config = REQUIREMENT_CONFIG[requirement];
  const paletteChoice = config?.palette ?? palette.gray;
  const Icon = config?.icon ?? Dog;
  const displayLabel = DOG_REQUIREMENT_LABELS[requirement] ?? requirement;
  const tooltip = config?.tooltip ?? `${displayLabel} 규정을 확인해 주세요.`;

  return [
    {
      key: `requirement-${requirement}`,
      label: "준비물",
      display: displayLabel,
      tooltip,
      Icon,
      badgeBg: paletteChoice.badgeBg,
      badgeColor: paletteChoice.badgeColor,
      cardBg: paletteChoice.cardBg,
      cardBorder: paletteChoice.cardBorder,
      iconColor: paletteChoice.iconColor,
    } satisfies InfoItem,
  ];
}

type PlaceInfoBadgesProps = {
  place: Place;
  variant?: "compact" | "grid";
};

export default function PlaceInfoBadges({
  place,
  variant = "compact",
}: PlaceInfoBadgesProps) {
  const items = buildInfoItems(place);
  if (items.length === 0) {
    return null;
  }

  if (variant === "grid") {
    return (
      <GridWrap>
        {items.map((item) => (
          <Tooltip
            key={item.key}
            title={`${item.label}: ${item.tooltip}`}
            placement="top"
          >
            <InfoCard $bg={item.cardBg} $border={item.cardBorder}>
              <IconBubble $color={item.iconColor}>
                <item.Icon size={18} strokeWidth={1.8} />
              </IconBubble>
              <InfoText>
                <InfoLabel>{item.label}</InfoLabel>
                <InfoValue>{item.display}</InfoValue>
              </InfoText>
            </InfoCard>
          </Tooltip>
        ))}
      </GridWrap>
    );
  }

  return (
    <CompactWrap>
      {items.map((item) => (
        <Tooltip
          key={item.key}
          title={`${item.label}: ${item.tooltip}`}
          placement="top"
        >
          <CompactTag
            $bg={item.badgeBg}
            $color={item.badgeColor}
            bordered={false}
          >
            <item.Icon size={15} strokeWidth={1.9} />
            {item.display}
          </CompactTag>
        </Tooltip>
      ))}
    </CompactWrap>
  );
}

const CompactWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const CompactTag = styled(Tag)<{ $bg: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border-radius: 999px !important;
  background: ${(props) => props.$bg} !important;
  color: ${(props) => props.$color} !important;
  font-size: 12px;
  line-height: 1.1;
  margin-inline: 0;
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
`;

const InfoCard = styled.div<{ $bg: string; $border: string }>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 18px;
  background: ${(props) => props.$bg};
  border: 1px solid ${(props) => props.$border};
`;

const IconBubble = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.74);
  color: ${(props) => props.$color};
`;

const InfoText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoLabel = styled.span`
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #6a7c76;
  font-weight: 600;
`;

const InfoValue = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #132d23;
`;
